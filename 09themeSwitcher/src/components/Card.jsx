export default function Card(){
  return(
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1587613861917-9c2b0b5d0c8e" alt="avatar" />
      <div className="p-4">
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">Chai or Code</p>
        <p className="text-gray-400 dark:text-gray-300">A blog about chai and code</p>
      </div>
    </div>
  )
}