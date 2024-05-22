const Landing = ({ onClick }) => {
    const Styles = {
        container: `
            w-screen
            h-screen
            bg-[#3d3935]
            z-10
            text-white
            flex
            flex-col
        `,
        title: `
            text-4xl 

        `
    }

    return (
        <div className={Styles.container}>
            <div>
                <h1 className={Styles.title}>Cuanto cuesta desarrollar mi <span className="text-blue-200">app</span>?</h1>
                <p>Calcula de forma rapida el costo para crear tu app, contestando estas sencillas preguntas.</p>
                <button onClick={onClick}>empezar</button>
            </div>
        </div>
    )
}

export default Landing;
