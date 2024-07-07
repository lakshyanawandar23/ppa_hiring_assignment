// components/FooterDesignSection.js

export default function FooterDesignSection() {
    return (
      <div className="py-16 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="https://clipground.com/images/cliente-png-7.png" alt="Footer Design" className="h-64" />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
            <h3 className="text-2xl font-bold">How to design your site footer like we did</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-800">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultricies mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisl facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg dark:bg-gray-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  