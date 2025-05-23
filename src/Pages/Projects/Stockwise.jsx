
import ZoomableImage from "../../components/ZoomImage";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react"

const StockWise = () => {

  const [showvisit, setShowvisit] = useState(false);
  const [selectedImage ,setSelectedImage] = useState(null);
const [showloader , setShowloader] = useState(true);

  const handleclick = (src)=>{
    setSelectedImage(src)
  }
const playClickSound = () => {
  const clickAudio = new Audio('/sounds/camera-shutter.mp3');
  clickAudio.volume = 0.5; // optional: lower volume
  console.log('helllo bitch')
  clickAudio.play().catch((err) => {
    console.warn("Audio play failed:", err);
  });
};
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowloader(false);
    }, 800);
  
    return () => clearTimeout(timeout);
  }, []);
  
  return<> 
  <AnimatePresence>
  {showloader && (
<motion.div
  key="loader"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-100%" }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  onAnimationStart={() => playClickSound()}
  className="z-50 fixed inset-0 bg-amber-50 h-screen w-screen"
/>

  )}
</AnimatePresence>
  <div>
    <div className="flex flex-col items-start mt-30">

      <div className=" flex">
        <div className="text-3xl lg:text-4xl font-medium ">
          Stockwise
        </div>
        <div className=" flex justify-center items-center gap-4">
          <a
            href="https://stock-wise-chi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl ml-5 font-bold  text-pink-100 animate-pulse"
            onMouseEnter={() => setShowvisit(true)}
            onMouseLeave={() => setShowvisit(false)}
          >
            →

          </a>
          {
            showvisit && <div>
              <div className="text-neutral-400 text-md z-50 fixed transition-transform ease-in duration-300 ">
                visit site
              </div>
            </div>
          }

        </div>

      </div>
      <div className=" text-2xl lg:text-2xl mt-2 leading-relaxed text-neutral-400">Inventory Manegement application  </div>
    </div>

    {
      //image
    }
    <div className="p-2 lg:p-3 bg-neutral-700 hover:opacity-85 transition-transform duration-500 cursor-pointer mt-8 "
    >
      <a
        href="https://stock-wise-chi.vercel.app"
        target="_blank"
        rel="noopener noreferrer"

      >
        <img src="/Images/stockwise.png" className="rounded-lg" />
      </a>
    </div>
    {
      //About
    }
    <div className=" flex flex-col items-start mt-8">
      <div className="text-xl lg:text-2xl font-semibold ">ABOUT</div>
      <div className="text-start  text-xl lg:text-2xl mt-7 text-neutral-400">Engineered a web platform for <span className="font-semibold text-neutral-100">
        stock tracking, sales logging, and expense analysis
      </span> to
        optimize inventory operations.</div>
      <div className="text-start text-xl lg:text-2xl mt-1 text-neutral-400">
        Cater to the needs of Manufacturers for their Inventory Management and <p>
          Everyday Sales Tracking
        </p>
      </div>
    </div>

    {
      //System Architecture
    }

    <div className="flex flex-col items-start mt-10">
      <div className="text-2xl font-semibold">
        SYSTEM ARCHITECTURE
      </div>
      <div className="text-xl mt-7 text-neutral-300"> Let's talk about the high level architecture</div>

      <div className="  hover:opacity-85 transition-transform duration-500 cursor-pointer mt-8 "
      >

        <img src="/Images/hld_stockwise.png" className="rounded-lg" onClick={()=>{
          handleclick("/Images/hld_stockwise.png" )
        }}/>
      </div>


      <div className="mt-8">
        <ul className="flex flex-col gap-4">


          <div className="grid grid-cols-4">
            <span className="text-start col-span-1 font-semibold text-lg lg:text-xl mr-2">User Interaction : </span>
            <span className=" text-start col-span-3 text-lg lg:text-xl">  Users access the app via the React frontend and perform actions like logging in or managing inventory/sales/expenses.</span>
          </div>
          <div className="grid grid-cols-4">
            <span className="text-start col-span-1 font-semibold text-lg lg:text-xl mr-2">
              Authentication:
            </span>
            <span className="text-start col-span-3 text-lg lg:text-xl">
              React communicates with Firebase Auth to sign in or verify users.
            </span>
          </div>

          <div className="grid grid-cols-4">
            <span className="text-start col-span-1 font-semibold text-lg lg:text-xl mr-2">
              Secure API Requests:
            </span>
            <span className="text-start col-span-3 text-lg lg:text-xl">
              Once authenticated, React includes the Firebase token in API requests to the Node.js/Express backend.
            </span>
          </div>

          <div className="grid grid-cols-4">
            <span className="text-start col-span-1 font-semibold text-lg lg:text-xl mr-2">
              Backend Logic:
            </span>
            <span className="text-start col-span-3 text-lg lg:text-xl">
              Node.js verifies the token with Firebase, performs business logic, and interacts with MongoDB to fetch/update data.
            </span>
          </div>

          <div className="grid grid-cols-4">
            <span className="text-start col-span-1 font-semibold text-lg lg:text-xl mr-2">
              Data Persistence:
            </span>
            <span className="text-start col-span-3 text-lg lg:text-xl">
              All inventory, sales, and expense records are stored in MongoDB collections.
            </span>
          </div>

          <div className="grid grid-cols-4">
            <span className="text-start col-span-1 font-semibold text-lg lg:text-xl mr-2">
              UI Updates:
            </span>
            <span className="text-start col-span-3 text-lg lg:text-xl">
              The backend returns data to React, which updates the UI accordingly.
            </span>
          </div>
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-start ">
          <div className="lg:text-xl text-neutral-300">
            Lets Dive in Deeper understanding feature structure and their functionalities
            </div>

   
        <div className="text-xl lg:text-2xl font-semibold mt-10">
        SALES ARCHITECTURE
        </div>

          <div className="text-lg lg:text-xl font-medium text-neutral-300 text-start mt-7">

            The Sales feature on the website allows user to register their daily sales, logs sales and calculates total amount spend with search and filtering functionalities
          </div>

            <img src="/Images/stockwise_sales.png" className="mt-7 rounded-lg" 
            onClick={()=>{handleclick("/Images/stockwise_sales.png")}}/>


            <div className="mt-10 flex flex-col items-start text-left">
  <div className="text-xl lg:text-2xl font-semibold">
    TECH FLOW – SALES SERVICE
  </div>

  <div className="text-lg lg:text-xl text-neutral-300 mt-8">
    The Sales Service was designed to allow efficient and real-time entry and tracking of daily sales, incorporating tax (GST) and flexible data filtering.
  </div>


  <div className="text-xl lg:text-2xl font-semibold mt-8">
    1. Frontend (ReactJs + Tailwindcss)
  </div>
  <div className="text-lg  lg:text-xl text-neutral-300 mt-2">
    Built with React and Tailwind CSS, the UI provides a form to input product, quantity, rate, and GST. It calculates the total dynamically and uses Axios  to send the data to the backend.
  </div>


  <div className="text-xl  lg:text-2xl font-semibold mt-8">
    2. Backend (Node.js + Express)
  </div>
  <div className="text-lg lg:text-xl text-neutral-300 mt-2">
    The backend handles POST requests from the frontend. It validates inputs and stores the sales records in MongoDB, including auto-generated timestamps.
  </div>

        <pre className="bg-neutral-800 text-red-300 text-sm lg:text-lg rounded-lg p-3 mt-2 w-full overflow-x-auto">
{`// POST /:uid/:companyid
// → Creates a new sale entry
router.post('/:uid/:companyid', async (req, res) => { ... });

// GET /:uid/:companyid
// → Fetches all sales records for a specific user and company.
router.get('/:uid/:companyid', async (req, res) => { ... });

// PUT /:uid/:companyid/:id
// → Updates a specific sale record with new details.
router.put('/:uid/:companyid/:id', async (req, res) => { ... });

// DELETE /:uid/:companyid/:id
// → Deletes a specific sale record.
router.delete('/:uid/:companyid/:id', async (req, res) => { ... });
`}
</pre>


  <div className="text-xl lg:text-2xl font-semibold mt-8">
    3. MongoDB Schema Design
  </div>
  <div className="text-lg lg:text-xl text-neutral-300 mt-2">
    Sales are stored in a Mongoose schema containing item name, quantity, rate, GST, and calculated total. Each entry has a creation timestamp.
  </div>
  <pre className="bg-neutral-800 text-red-300 text-sm lg:text-lg rounded-lg p-3 mt-2 w-full overflow-x-auto">
    {`const saleSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  rate: Number,
  gst: Number,
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});`}
  </pre>


  

</div>

        </div>



    </div>

  </div>
  <ZoomableImage
        open={!!selectedImage}
        imageSrc={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
  </>
}

export default StockWise;


