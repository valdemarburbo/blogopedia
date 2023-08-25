import Feed from "@components/Feed";

const Home = () => {
  return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                A hub for ideas.
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center">Discover. Create. Share.</span>
            </h1>
            <p className="desc text-center">
                Blogopedia is a platform connecting millions of users with a goal of fostering a conducive environment for the exchange of ideas. Connect with others and become the laser of enlightenment!
            </p>

            <Feed />
        </section>
  )
}

export default Home