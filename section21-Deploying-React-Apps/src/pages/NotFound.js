
const NotFound = () => {
    return <section className="centered">
            <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/notfoundpage.png'} /> <br /> <br />
            <h3 style={{width:'100%', display:'block'}}>Page Not Found 404!</h3>
    </section>

}

export default NotFound;