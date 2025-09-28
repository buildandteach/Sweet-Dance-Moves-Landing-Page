import React from 'react';

// --- Data ---

const appName = 'Sweet Dance Moves';
const appDescription = 'Organize, Practice & Perfect Your Dance Repertoire';
const longDescription =
  'Take your dance practice to the next level with Sweet Dance Moves, the ultimate personal dance journal. Whether you’re learning salsa, bachata, kizomba, or crafting your own freestyle choreography, this app helps you organize and revisit your moves effortlessly — and keeps everything in sync across devices with iCloud.';
const appStoreUrl = 'https://apps.apple.com/us/app/sweet-dance-moves/id6749212354';
const privacyPolicyUrl = 'http://buildandteach.com/privacy-policy/';
const termsOfUseUrl =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

const heroImageUrl =
  'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0752561460.firebasestorage.app/o/mainscreenshot.PNG?alt=media&token=f259cb26-1d0f-443e-a0bc-0cefc594e557';

const screenshotUrls = [
  'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0752561460.firebasestorage.app/o/img1.png?alt=media&token=fecf5a9b-8bf7-4000-9802-674121e7c352',
  'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0752561460.firebasestorage.app/o/img2.png?alt=media&token=1f62346d-29c4-4d5c-977c-e7b9dd0622d9',
  'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0752561460.firebasestorage.app/o/img3.png?alt=media&token=1de26f54-e071-430c-8eae-5984d5fb758d',
  'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0752561460.firebasestorage.app/o/img4.png?alt=media&token=5134dd05-ea47-4b87-8e94-fb43b3308730',
];

const features = [
  {
    icon: '🎬',
    title: 'Capture & Categorize',
    description:
      'Save moves from classes, workshops, or videos. Assign styles, sources, and tags.',
  },
  {
    icon: '📹',
    title: 'Video Support',
    description:
      'Add videos from your device or link from YouTube, Instagram, and TikTok.',
  },
  {
    icon: '📝',
    title: 'Practice Lists',
    description: 'Group moves into focused practice lists by theme, event, or difficulty.',
  },
  {
    icon: '🖼️',
    title: 'Thumbnails & Previews',
    description: 'Visually scan your library with smart previews for local and online videos.',
  },
  {
    icon: '🎨',
    title: 'Style & Source Library',
    description: 'Customize your own list of dance styles and content sources.',
  },
  {
    icon: '☁️',
    title: 'iCloud Sync',
    description: 'Your entire library stays safely stored and updated across all your Apple devices.',
  },
];

const danceStyles = [
  'Salsa',
  'Bachata',
  'Kizomba',
  'Zouk',
  'Urban Kiz',
  'Contemporary',
  'Hip Hop',
];

// --- Components ---

function AppStoreButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
      aria-label="Download on the App Store"
    >
      <div className="flex items-center">
        <svg
          className="w-8 h-8 mr-2 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.1,4.4a5.2,5.2,0,0,0-4-2.3,5.5,5.5,0,0,0-4.8,2.7A5.2,5.2,0,0,0,7,2a5.4,5.4,0,0,0-4.1,5.1,5,5,0,0,0,1,3,6.3,6.3,0,0,0,4.1,3.4,4.2,4.2,0,0,0,.6.1,1.5,1.5,0,0,1,.8.2,1.6,1.6,0,0,1-.8,3.1H9.3a1.6,1.6,0,0,0-1.5,1.7,1.5,1.5,0,0,0,1.5,1.7h5.3a1.5,1.5,0,0,0,1.5-1.7,1.5,1.5,0,0,0-1.5-1.7h-.4a1.6,1.6,0,0,1-.8-3.1,1.5,1.5,0,0,1,.8-.2,3.3,3.3,0,0,0,.6-.1,6.5,6.5,0,0,0,4.1-3.4,5,5,0,0,0,1-3A5.2,5.2,0,0,0,19.1,4.4ZM12,3.6a3,3,0,0,1,2.8,1.7,3.5,3.5,0,0,1-2.6,1.4,1,1,0,0,1-.2,0,3.6,3.6,0,0,1-2.7-1.4A3,3,0,0,1,12,3.6Z" />
        </svg>
        <div>
          <span className="text-xs">Download on the</span>
          <br />
          <span className="text-xl font-semibold">App Store</span>
        </div>
      </div>
    </a>
  );
}

function Hero() {
  return (
    <section className="relative text-white text-center flex flex-col justify-center min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-80"></div>
      <div className="relative z-10 flex flex-col items-start justify-center px-4 pt-24 min-h-[60vh]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400" style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
            {appName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">{appDescription}</p>
          <div className="mb-10">
            <AppStoreButton href={appStoreUrl} />
          </div>

          <div className="w-60 md:w-72 p-2 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-2xl shadow-indigo-500/20">
             <img
              src={heroImageUrl}
              alt="App home screen"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenshotFrame({ src, alt }) {
  return (
    <div className="flex-shrink-0 w-72 p-2 bg-gray-800/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300">
      <img
        src={src}
        alt={alt}
        className="rounded-xl w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );
}

function Screenshots() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Capture Every Step, Visually
        </h2>
        <div className="flex justify-center flex-wrap gap-8">
          {screenshotUrls.map((url, index) => (
            <ScreenshotFrame key={index} src={url} alt={`App screenshot ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Everything You Need to Elevate Your Dance
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Take your dance practice to the next level.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppForEveryone() {
  return (
    <section className="py-16 text-white text-center px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ideal for dancers of all styles
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
          {danceStyles.map((style) => (
            <span
              key={style}
              className="bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500/30"
            >
              {style}
            </span>
          ))}
          <span className="text-indigo-300 px-4 py-2 text-sm font-medium">& more.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <p className="mb-4">{longDescription}</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href={termsOfUseUrl}
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          <a
            href={privacyPolicyUrl}
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {appName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <main>
        <Hero />
        <Screenshots />
        <Features />
        <AppForEveryone />
      </main>
      <Footer />
    </div>
  );
}