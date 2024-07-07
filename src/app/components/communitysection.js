// components/CommunitySection.js
export default function CommunitySection() {
    return (
      <div className="py-16 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold ">Our Clients</h2>
            <p className="mt-2 text-lg text-gray-800 ">We have been working with some Fortune 500+ clients</p>
          </div>
          <div className="flex justify-center space-x-4 mb-12">
            <img src="/images/icons1.png" alt="Client 1" className="h-10" />
            <img src="/images/icons2.png" alt="Client 2" className="h-10" />
            <img src="/images/icons1.png" alt="Client 3" className="h-10" />
            <img src="/images/icons4.png" alt="Client 4" className="h-10" />
            <img src="/images/icons2.png" alt="Client 6" className="h-10" />
          </div>
          <div className="text-center mb-12 ">
            <h3 className="text-2xl font-bold ">Manage your entire community in a single system</h3>
            <p className="mt-2 text-lg ">Who is Nexcent suitable for?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="text-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <div className="flex justify-center mb-4">
                <img src="/images/icons1.png" alt="Membership Organisations" className="h-12" />
              </div>
              <h4 className="text-xl font-semibold ">Membership Organisations</h4>
              <p className="mt-2 text-gray-600 ">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <div className="flex justify-center mb-4">
                <img src="/images/icons2.png" alt="National Associations" className="h-12" />
              </div>
              <h4 className="text-xl font-semibold ">National Associations</h4>
              <p className="mt-2 text-gray-600 ">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
              <div className="flex justify-center mb-4">
                <img src="/images/icons4.png" alt="Clubs And Groups" className="h-12" />
              </div>
              <h4 className="text-xl font-semibold ">Clubs And Groups</h4>
              <p className="mt-2 text-gray-600 ">
                Our membership management software provides full automation of membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  