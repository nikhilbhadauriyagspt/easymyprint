import React from 'react';

const Content = () => {
  return (
    <section className="py-16 bg-white font-snpro">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 border-b-2 border-blue-600 pb-4">
          Troubleshooting & Setup Help for All Types of Printers
        </h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <p className="text-lg font-medium">
            Having issues with your printer? Whether you're setting up a new device, fixing offline errors, connecting to Wi-Fi, or trying to get your computer to recognize your printer — our support team is here to help.
          </p>
          
          <p className="font-semibold text-blue-700 uppercase tracking-wide">
            We assist with all major printer types, including wireless, USB, office, home, all-in-one, and photo printers.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Printer Showing Offline</h2>
            <p className="mb-3">If your printer appears offline, our team can quickly diagnose whether it’s caused by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Network disconnections</li>
              <li>Driver conflicts</li>
              <li>Pending print jobs</li>
              <li>Device recognition issues</li>
              <li>We guide you to get your printer back online in minutes.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Wireless / Wi-Fi Setup Help</h2>
            <p className="mb-3">Need help connecting your printer to Wi-Fi? We assist with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Network configuration</li>
              <li>Router compatibility</li>
              <li>Wireless setup steps for all printer types</li>
              <li>Connection stability troubleshooting</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Driver Installation & Updates</h2>
            <p className="mb-3">If your computer can’t detect your printer, the most common reason is a missing or outdated driver. We help you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Download and install the correct driver</li>
              <li>Fix driver conflicts</li>
              <li>Configure your computer to recognize the printer properly</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Printing & Scanning Problems</h2>
            <p className="mb-3">Whether prints are blank, faded, slow, or not starting at all — our team helps resolve:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Print queue errors</li>
              <li>Cartridge recognition issues</li>
              <li>Paper feed and jam problems</li>
              <li>Scanning & copying malfunctions</li>
            </ul>
          </div>

          {/* Setup Guide Section */}
          <div className="mt-16 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              Printer Setup Made Easy - Step by Step Guide
            </h2>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-8">
              (Printer Setup, Printer Installation, Add Printer, Printer Offline)
            </p>
            
            <p className="mb-6 font-semibold italic text-blue-600">
              Please follow steps once you receive the Printer:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</span>
                  Unbox Your Printer
                </h3>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Remove all packaging materials and tapes.</li>
                  <li>Place the printer on a flat surface near your Wi-Fi router or computer.</li>
                  <li>Install Ink/Toner Cartridges & Paper.</li>
                  <li>Open the cartridge access area.</li>
                  <li>Insert the cartridges as per the color labels.</li>
                  <li>Load A4 or preferred paper size into the input tray.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</span>
                  Power On & Connect
                </h3>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Plug in the power cord and press the power button.</li>
                  <li>For USB setup: connect the USB cable to your computer.</li>
                  <li>For Wi-Fi Printer setup: go to printer settings → choose Wi-Fi → select your network → enter password.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</span>
                  Download Printer Drivers
                </h3>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Visit the official Printer Setup website.</li>
                  <li>Enter your printer model and download the latest drivers.</li>
                  <li>Install the software on your Windows or Mac device.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">4</span>
                  Test Your Printer
                </h3>
                <ul className="list-disc pl-14 space-y-2">
                  <li>Print a test page to confirm everything is working.</li>
                  <li>Adjust preferences like paper size, quality, and duplex printing.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Content;
