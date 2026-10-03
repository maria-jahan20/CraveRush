import { useEffect, useState,useMemo } from 'react';
import L from 'leaflet';

import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMap,
} from 'react-leaflet';

import {
  Bell,
  Bike,
  BookOpen,
  Home as HomeIcon,
  PackageCheck,
  RotateCcw,
  Sparkles,
  Timer,
  X,
  Zap,
  MapPinned,
} from 'lucide-react';

import { RecipePage } from '../recipe/RecipePage';
import { OrderRecipePicker } from '../recipe/RecipePage';

import type {Product, Recipe, CartLine } from '@/types';
import { products } from '@/data/products';
import { recipeBook } from '@/data/recipes';

type TrackerProps = {
  orderNumber: string;
  cart: CartLine[];
  onAgain: () => void;
  onFinish: () => void;
};

/*
 * These used to live inside App.tsx.
 * We are keeping them here for now because they are
 * specifically related to the tracker.
 */

const trackerSteps = [
  {
    label: 'Food is preparing',
    detail: 'The chef has located a pan. Huge progress.',
    emoji: '🍳',
    icon: Zap,
  },
  {
    label: 'Rider Has Picked up your order',
    detail:
      'A tiny scooter is moving with confidence it did not earn.',
    emoji: '🛵',
    icon: Bike,
  },
  {
    label: 'Rider is on your way',
    detail:
      'The restaurant has your meal. You still have your money. Everybody wins?',
    emoji: '🍽️',
    icon: PackageCheck,
  },
];

const arrivalSeconds = 180;
const stageSeconds = 60;

type Coordinates = {
  lat: number;
  lng: number;
};

function RiderMarker({ position }: { position: Coordinates }) {
  const icon = L.divIcon({
    className: '',
    html: `
      <div style="
        width: 52px;
        height: 52px;
        border-radius: 9999px;
        background: #252f9f;
        border: 4px solid #f8f3e8;
        color: #f1db2f;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 3px 3px 0 #f07863;
        font-size: 23px;
      ">
        🛵
      </div>
    `,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });

  return (
    <Marker
      position={[position.lat, position.lng]}
      icon={icon}
    />
  );
}

function MapFollower({ position }: { position: Coordinates }) {
  const map = useMap();

  useEffect(() => {
    map.panTo([position.lat, position.lng], {
      animate: true,
      duration: 0.8,
    });
  }, [position, map]);

  return null;
}

function clock(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`;
}

/*
 * This also used to live inside App.tsx.
 * We are keeping it inside Tracker.tsx instead of
 * creating another RecipePrompt.tsx file.
 */
function RecipePrompt({
  onOpen,
  onDismiss,
}: {
  onOpen: () => void;
  onDismiss: () => void;
}) {
  return (
    <div
      className="animate-slide-in fixed right-5 top-24 z-[55] w-[min(380px,calc(100vw-2.5rem))] rounded-2xl border-2 border-[#252f9f] bg-[#f1db2f] p-4 text-[#252f9f] shadow-[6px_6px_0_#f07863]"
      role="status"
      data-testid="toast-recipe-prompt"
    >
      <div className="flex gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f07863]">
          <BookOpen size={19} />
        </div>

        <div className="min-w-0 flex-1 pr-5">
          <p className="font-mono-custom text-[9px] uppercase tracking-[.13em]">
            Recipe emergency
          </p>

          <p className="mt-1 font-display text-sm font-bold leading-tight">
            Want to know how the chef made it, or should we let the mystery
            age gracefully?
          </p>
        </div>

        <button
          onClick={onDismiss}
          className="absolute right-3 top-3 rounded-full p-1 text-[#252f9f]"
          aria-label="Dismiss recipe prompt"
          data-testid="button-dismiss-recipe-prompt"
        >
          <X size={15} />
        </button>
      </div>

      <button
        onClick={onOpen}
        className="mt-4 w-full rounded-xl bg-[#252f9f] px-3 py-2.5 font-mono-custom text-[10px] uppercase tracking-[.1em] text-[#f8f3e8]"
        data-testid="button-open-recipe-prompt"
      >
        Show me the alleged recipe
      </button>
    </div>
  );
}

export function Tracker({
  orderNumber,
  cart,
  onAgain,
  onFinish,
}: TrackerProps) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

const [userLocation, setUserLocation] =
  useState<Coordinates | null>(null);

const [route, setRoute] = useState<Coordinates[]>([]);

const [routeLoading, setRouteLoading] =
  useState(true);

const [recipeToastOpen, setRecipeToastOpen] =
  useState(true);
  useEffect(() => {
  if (!navigator.geolocation) {
    setRouteLoading(false);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    () => {
      setRouteLoading(false);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
    },
  );
}, []);

useEffect(() => {
  if (!userLocation) return;

  const currentUserLocation = userLocation;

  const restaurantLocation: Coordinates = {
    lat: 23.7806,
    lng: 90.4071,
  };

  async function loadRoute() {
    try {
      const url =
        `https://router.project-osrm.org/route/v1/driving/` +
        `${restaurantLocation.lng},${restaurantLocation.lat};` +
        `${currentUserLocation.lng},${currentUserLocation.lat}` +
        `?overview=full&geometries=geojson`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Routing request failed');
      }

      const data = await response.json();

      const coordinates =
        data.routes?.[0]?.geometry?.coordinates;

      if (!coordinates?.length) {
        throw new Error('No route found');
      }

      const routeCoordinates: Coordinates[] =
        coordinates.map(
          ([lng, lat]: [number, number]) => ({
            lat,
            lng,
          }),
        );

      setRoute(routeCoordinates);
    } catch (error) {
      console.error('Could not load route:', error);
    } finally {
      setRouteLoading(false);
    }
  }

  loadRoute();
}, [userLocation]);

  const [recipeOpen, setRecipeOpen] = useState(false);

  const [notifyWhenArrives, setNotifyWhenArrives] =
    useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () =>
        setElapsedSeconds((seconds) =>
          Math.min(seconds + 1, arrivalSeconds),
        ),
      1000,
    );

    return () => window.clearInterval(timer);
  }, []);

 useEffect(() => {
  if (elapsedSeconds >= arrivalSeconds) {
    onFinish();
  }
}, [elapsedSeconds, onFinish]);

  const activeStep = Math.min(
    trackerSteps.length - 1,
    Math.floor(elapsedSeconds / stageSeconds),
  );

  const remainingSeconds = Math.max(
    0,
    arrivalSeconds - elapsedSeconds,
  );

 const routeFraction = Math.min(
  1,
  elapsedSeconds / arrivalSeconds,
);

const routePosition =
  routeFraction * Math.max(route.length - 1, 0);

const riderIndex =
  route.length >= 2
    ? Math.min(
        route.length - 2,
        Math.floor(routePosition),
      )
    : 0;

const segmentProgress =
  route.length >= 2
    ? routePosition - riderIndex
    : 0;

const routeStart = route[riderIndex];
const routeEnd = route[riderIndex + 1];

const riderPosition =
  route.length >= 2 && routeStart && routeEnd
    ? {
        lat:
          routeStart.lat +
          (routeEnd.lat - routeStart.lat) *
            segmentProgress,

        lng:
          routeStart.lng +
          (routeEnd.lng - routeStart.lng) *
            segmentProgress,
      }
    : userLocation;

  const routeProgress = Math.min(
    100,
    (elapsedSeconds / arrivalSeconds) * 100,
  );

  const currentStageRemaining =
    activeStep === trackerSteps.length - 1
      ? remainingSeconds
      : stageSeconds -
        (elapsedSeconds % stageSeconds);

  const CurrentIcon = trackerSteps[activeStep].icon;

  return (
    <main
      className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10 lg:py-16"
      data-testid="page-tracking"
    >
      {recipeToastOpen && (
        <RecipePrompt
          onOpen={() => {
            setRecipeToastOpen(false);
            setRecipeOpen(true);
          }}
          onDismiss={() => setRecipeToastOpen(false)}
        />
      )}

      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">
            Order {orderNumber}
          </p>

          <h1 className="mt-3 font-display text-[clamp(3.3rem,7vw,6.8rem)] font-bold leading-[.86] tracking-[-.09em] text-[#252f9f]">
            It is
            <br />
            <span className="text-[#f07863]">
              on the way-ish.
            </span>
          </h1>

          <p className="mt-5 max-w-[490px] text-base leading-relaxed text-[#6570a4]">
            A three-minute suspense film in three acts: one pan,
            one scooter, and one restaurant with an excellent return
            policy.
          </p>
        </div>

        <button
          onClick={onAgain}
          className="inline-flex items-center gap-2 self-start rounded-full border border-[#d5d4c8] bg-[#fbf9f1] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#252f9f] sm:self-end"
          data-testid="button-order-again"
        >
          <RotateCcw size={14} />
          Order again
        </button>
      </div>

      <div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          
          <section
  className="relative min-h-[440px] overflow-hidden rounded-[1.8rem] border border-[#bfc0d7] bg-[#d9e4dc]"
  data-testid="map-tracker"
>{userLocation && route.length > 0 ? (
  <MapContainer
    center={[
      userLocation.lat,
      userLocation.lng,
    ]}
    zoom={14}
    scrollWheelZoom={false}
    className="relative z-0 h-[440px] w-full"
  >
    <TileLayer
      attribution="&copy; OpenStreetMap contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Polyline
      positions={route.map((point) => [
        point.lat,
        point.lng,
      ])}
      pathOptions={{
        color: '#252f9f',
        weight: 5,
      }}
    />

    {riderPosition && (
      <>
        <RiderMarker position={riderPosition} />
        <MapFollower position={riderPosition} />
      </>
    )}

    <Marker
      position={[
        userLocation.lat,
        userLocation.lng,
      ]}
    />
  </MapContainer>
) : (
  <div className="grid h-[440px] place-items-center">
    <div className="rounded-2xl border-2 border-[#252f9f] bg-[#f1db2f] px-5 py-4 text-center text-[#252f9f] shadow-[4px_4px_0_#f07863]">
      <MapPinned
        size={24}
        className="mx-auto mb-2"
      />

      <p className="font-display font-bold">
        {routeLoading
          ? 'Finding your very real-ish location...'
          : 'Could not load the map.'}
      </p>

      <p className="mt-1 font-mono-custom text-[9px] uppercase tracking-[.1em]">
        Please check location permission.
      </p>
    </div>
  </div>
)}

{/* <div className="absolute left-5 top-5 z-[500] rounded-xl border border-[#b7c5b9] bg-[#edf3ea]/90 px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#252f9f] backdrop-blur-sm">
  <MapPinned size={13} className="mr-2 inline" />
  Live-ish delivery map
</div> */}

{/* <div className="absolute left-5 top-5 z-[500] rounded-xl border border-[#b7c5b9] bg-[#edf3ea]/90 px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#252f9f] backdrop-blur-sm">
  <MapPinned size={13} className="mr-2 inline" />
  Live-ish delivery map
</div> */}

<div className="absolute bottom-5 left-5 right-5 z-[500] rounded-xl border border-[#b7c5b9] bg-[#edf3ea]/90 p-3 backdrop-blur-sm">
  <div className="flex items-center justify-between">
    <span className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">
      Rider confidence
    </span>

    <span className="font-display font-bold text-[#252f9f]">
      {Math.min(
        31 + Math.round(routeProgress * 0.51),
        82,
      )}
      %
    </span>
  </div>

  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#c3d1c6]">
    <div
      className="h-full rounded-full bg-[#f07863] transition-[width] duration-1000 ease-linear"
      style={{
        width: `${routeProgress}%`,
      }}
    />
  </div>
</div></section>

          <div
            className="mt-4 rounded-2xl border-2 border-[#252f9f] bg-[#f1db2f] px-5 py-4 text-[#252f9f] shadow-[5px_5px_0_#f07863]"
            data-testid="text-arrival-estimate"
          >
            <div className="flex items-center gap-3">
              <Timer size={20} />

              <p className="font-display text-lg font-bold">
                Arriving in {clock(remainingSeconds)}*
              </p>
            </div>

            <p className="mt-1 pl-8 font-mono-custom text-[9px] uppercase tracking-[.11em]">
              *Sarcasm detected. Please enjoy the route.
            </p>
          </div>

          <label
            className="mt-4 flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d5d4c8] bg-[#fbf9f1] p-4"
            data-testid="toggle-arrival-notification"
          >
            <div
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                notifyWhenArrives
                  ? 'bg-[#b9e2d0] text-[#252f9f]'
                  : 'bg-[#f4efe4] text-[#6570a4]'
              }`}
            >
              <Bell size={18} />
            </div>

            <span className="min-w-0 flex-1">
              <span className="block font-display text-sm font-bold text-[#252f9f]">
                Want a notification when the food arrives?
              </span>

              <span className="mt-1 block text-xs text-[#6570a4]">
                {notifyWhenArrives
                  ? 'Notification armed. We will alert you the moment it does not arrive.'
                  : 'We can notify you, emotionally and with questionable timing.'}
              </span>
            </span>

            <input
              type="checkbox"
              checked={notifyWhenArrives}
              onChange={(event) =>
                setNotifyWhenArrives(event.target.checked)
              }
              className="h-5 w-5 accent-[#252f9f]"
              aria-label="Notify me when the food arrives"
            />
          </label>
        </div>

        <section className="rounded-[1.8rem] border border-[#d5d4c8] bg-[#fbf9f1] p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-[#d5d4c8] pb-6">
            <div>
              <p className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#6570a4]">
                Live status
              </p>

              <h2
                className="mt-2 font-display text-2xl font-bold tracking-[-.05em] text-[#252f9f]"
                data-testid="text-current-status"
              >
                {trackerSteps[activeStep].label}
              </h2>
            </div>

            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f1db2f] text-[#252f9f] animate-pop">
              <CurrentIcon size={23} />
            </div>
          </div>

          <div className="relative mt-7 space-y-7 pl-2">
            {trackerSteps.map((step, index) => {
              const done = index <= activeStep;

              return (
                <div
                  key={step.label}
                  className="relative flex gap-4"
                  data-testid={`tracker-step-${index}`}
                >
                  <div
                    className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-lg transition-all ${
                      done
                        ? 'border-[#252f9f] bg-[#252f9f]'
                        : 'border-[#d5d4c8] bg-[#f4efe4] grayscale'
                    }`}
                  >
                    <span aria-hidden="true">
                      {step.emoji}
                    </span>
                  </div>

                  {index < trackerSteps.length - 1 && (
                    <div
                      className={`absolute left-[17px] top-9 h-8 w-0.5 ${
                        index < activeStep
                          ? 'bg-[#252f9f]'
                          : 'bg-[#d5d4c8]'
                      }`}
                    />
                  )}

                  <div>
                    <p
                      className={`font-display font-bold ${
                        done
                          ? 'text-[#252f9f]'
                          : 'text-[#a4a6b4]'
                      }`}
                    >
                      {step.label}
                    </p>

                    <p
                      className={`mt-1 text-xs leading-relaxed ${
                        done
                          ? 'text-[#6570a4]'
                          : 'text-[#a4a6b4]'
                      }`}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="mt-8 rounded-xl bg-[#f07863] p-4 text-[#252f9f]"
            data-testid="text-tracker-wink"
          >
            <div className="flex gap-3">
              <Sparkles size={18} className="shrink-0" />

              <p className="font-display text-sm font-bold leading-relaxed">
                Plot twist: this order will never arrive. But look
                at that little scooter go.
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">
            <span className="flex items-center gap-2">
              <Timer size={13} />
              Phase {activeStep + 1} of 3
            </span>

            <span>
              {currentStageRemaining
                ? `${clock(currentStageRemaining)} until next bit`
                : 'final bit unlocked'}
            </span>
          </div>

          <button
            onClick={() => setRecipeOpen(true)}
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#252f9f] bg-[#f1db2f] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.1em] text-[#252f9f]"
            data-testid="button-open-recipe-manually"
          >
            <BookOpen size={15} />
            Open recipe desk manually
          </button>
        </section>
      </div>

      {recipeOpen && (
  <div className="fixed inset-0 z-[9999] overflow-y-auto bg-[#252f9f]/30 px-5 py-10 backdrop-blur-sm">
    <div className="mx-auto max-w-[760px]">
      <OrderRecipePicker
        cart={cart}
        onClose={() => setRecipeOpen(false)}
      />
    </div>
  </div>
)}
    </main>
  );
}