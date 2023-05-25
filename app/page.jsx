import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Your Prompts
    </h1>
    <p className='desc text-center'>
    Your Prompts
    </p>
    <Feed />
  </section>
  
  )
}

export default Home