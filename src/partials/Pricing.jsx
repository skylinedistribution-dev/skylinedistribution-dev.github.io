function Pricing () {
    return (
        <div id="pricing">
            <section className="bg-white text-gray-100">
                <div className="max-w-5xl mx-auto text-center py-12">
                    <h1 className="h2 mb-4 pt-10 text-black">Fulfillment Pricing Plans</h1>
                    <p className="text-xl text-gray-600">
                        We offer a simple and transparent volume-based pricing model with no hidden fees. 
                    </p>
                    <p className="text-sm pt-3 text-gray-600">
                        You will be charged based on your usage after a period of 30 days. 
                        Contact us for custom pricing for stores shipping more than 6000 units per month.
                    </p>
                </div>
                <div className="container mx-auto p-6 overflow-x-auto">
                    <table className="w-full">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium text-black">Starter</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl text-black">$0.65</span>
                                        <span className="font-medium dark:text-gray-400"> / unit</span>
                                    </p>
                                </th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium text-black">Standard</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl text-black">$0.55</span>
                                        <span className="font-medium dark:text-gray-400"> / unit</span>
                                    </p>
                                </th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium text-black">Premium</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl text-black">$0.45</span>
                                        <span className="font-medium dark:text-gray-400"> / unit</span>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="space-y-6 text-center divide-y divide-gray-400">
                            
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-black">Number of Units Per Month</h3>
                                </th>
                                <td>
                                    <span className="block text-sm text-black">0 - 1000 units</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">1000 - 2000 units</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">2000 - 6000 units</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-black">Base Price Per Unit - FNSKU Labeling</h3>
                                </th>
                                <td>
                                    <span className="block text-sm text-black">$0.65</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.55</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.45</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-sky-500">Add Ons</h3>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-black">Poly Bag</h3>
                                </th>
                                <td>
                                    <span className="block text-sm text-black">$0.25</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.20</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.15</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-black">Bundle (Max 4 Units, Includes Poly Bag)</h3>
                                </th>
                                <td>
                                    <span className="block text-sm text-black">$0.40</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.35</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.30</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-black">Bubble Wrap</h3>
                                </th>
                                <td>
                                    <span className="block text-sm text-black">$0.30</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.25</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$0.20</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3 text-black">Oversize</h3>
                                </th>
                                <td>
                                    <span className="block text-sm text-black">$1.50</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$1.45</span>
                                </td>
                                <td>
                                    <span className="block text-sm text-black">$1.40</span>
                                </td>
                            </tr>
                         
                        
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Pricing