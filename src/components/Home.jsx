

export default function Home(props) {
  console.log(props.user)
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <h1>An App for People who love eating and drinking good food.</h1>
        <h3>Just Browse Around or Register/Login to join the fun.</h3>
        <img src="https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="People having fun" height={300} width={500}></img>
      </main>
    </>
  )
}