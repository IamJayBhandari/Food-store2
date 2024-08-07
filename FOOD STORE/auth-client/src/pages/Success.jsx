import React from 'react'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className="pt-[18vh]">
       
      <div class="bg-gray-100 h-screen">
            <div class="bg-white p-6  md:mx-auto">
              <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                  <path fill="currentColor"
                      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                  </path>
              </svg>
              <div class="text-center">
                  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                  <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                  <p> Have a great day!  </p>
                  <div class="py-10 text-center">
                      <Link to="/" class="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3">
                          GO BACK 
                    </Link>
                  </div>
              </div>
          </div>
        </div>
          </div>
  )
}

export default Success
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Success = () => {
//   // Function to handle order creation
//   const handleOrderCreation = async () => {
//     try {
//       const response = await fetch('/api/v1/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           // Add your order details here, such as userId, items, totalAmount, etc.
//         })
//       });

//       const data = await response.json();
//       console.log(data); // Log response from the backend
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="pt-[18vh]">
//       <div className="bg-gray-100 h-screen">
//         <div className="bg-white p-6  md:mx-auto">
//           <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
//             <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
//           </svg>
//           <div className="text-center">
//             <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
//             <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
//             <p> Have a great day! </p>
//             <div className="py-10 text-center">
//               {/* When the button is clicked, call handleOrderCreation function to create the order */}
//               <button onClick={handleOrderCreation} className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3">
//                 GO BACK
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Success;
