const products = [
    { 
        id: '1', 
        name: 'Microsoft Xbox Series S 512gb Standard  Color Blanco', 
        price: 129999, 
        category: 'consolas', 
        img:'http://http2.mlstatic.com/D_627149-MLA44484230438_012021-I.jpg', 
        stock: 25, 
        description:'Con tu consola Xbox One tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. Con más de 40 millones de unidades vendidas alrededor del mundo, Xbox One fue una sensación durante la última década. Con esta consola podrás desafiar tus habilidades con increíbles juegos y disfrutar del mejor contenido online durante horas.Se considera que esta consola es de las mejores dentro del mercado, dado que presenta una resolución de hasta 4K. Microsoft Xbox One S ofrece impresionantes gráficos, sonido de primer nivel e incluso la posibilidad de guardar todas tus partidas en la nube. Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 500 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás. Vas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.'
    },
    { id: '2', name: 'Sony Playstation 5 825gb Standard  Color Blanco Y Negro', price: 349999, category: 'consolas', img:'https://http2.mlstatic.com/D_Q_NP_791396-MLA47058527002_082021-R.webp', stock: 16, description:'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. PlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos. Se considera que esta consola es de las mejores dentro del mercado, dado que presenta una resolución de hasta 4K.'},
    { id: '3', name: 'Sony Playstation 4 500gb Standard  Color Negro Azabache', price: 143370, category: 'consolas', img:'http://http2.mlstatic.com/D_873170-MLA49192988408_022022-I.jpg', stock: 10, description:'Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. Gracias a sus pequeñas dimensiones, su consumo energético es reducido, lo que la convierte en un producto económico y accesible. No solo esto, el control DualShock combina funciones revolucionarias y sin precedentes mientras conserva precisión, comodidad y exactitud en cada movimiento.'},
    { id: '4', name: 'Nintendo Switch 32gb Standard  Color Rojo Neón, Azul Neón Y Negro', price: 124891, category: 'consolas', img:'http://http2.mlstatic.com/D_883371-MLA32731749246_112019-I.jpg', stock: 10, description:'Con Nintendo Switch la experiencia de una consola doméstica va siempre con vos.n casa, Nintendo Switch descansa sobre una base que conecta la consola con el televisor para que juegues con todos tus amigos y familiares. Con sólo retirar la consola Nintendo Switch de su base, pasará automáticamente a modo portátil y el juego que disfrutabas te acompañará a donde quiera que vayas en su pantalla multitáctil capacitiva de 6.2 pulgadas.La libertad de Nintendo Switch se expande incluso a su control gracias a los mandos Joy-Con, situados a cada lado de la pantalla y que pueden conectarse y desconectarse fácilmente con un simple clic. Juega en solitario con un mando Joy-Con en cada mano; compite o coopera con otro jugador con un mando cada uno; o reúne varios mandos para disfrutar de múltiples opciones de juego.Además, la nueva consola de Nintendo permite opciones de control más tradicionales, enganchando los Joy-Con a un soporte para mandos o mediante el nuevo mando Pro, y la mejor experiencia multijugador portátil pudiendo disfrutar de competiciones multijugador cara a cara, cada uno con su Nintendo Switch, en todas partes.'},
    { id: '5', name: 'Joystick Inalámbrico Microsoft Xbox Xbox Series X|s Controller + Usb-c Cable Carbon Black', price: 31809, category: 'accesorios', img:'http://http2.mlstatic.com/D_666153-MLA45712125825_042021-I.jpg', stock: 10, description:'Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.'},
    { id: '6', name: 'Joystick Inalámbrico Sony Playstation Dualshock 4 Jet Black', price: 10499, category: 'accesorios', img:'http://http2.mlstatic.com/D_617789-MLA51246424994_082022-I.jpg', stock: 10, description:'Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.'},
    { id: '7', name: 'Auriculares Gamer Inalámbricos Hyperx Cloud Flight Negro Con Luz  Rojo Led', price: 
    22499, category: 'accesorios', img:'http://http2.mlstatic.com/D_675916-MLA40762447172_022020-I.jpg', stock: 10, description:'Ideado para los gamers más exigentes, el HyperX Cloud Flight tiene todo lo que un jugador busca. Su conectividad inalámbrica permite moverte de un lugar a otro sin cables. A su vez, su batería de larga duración te dará horas interminables de sonidos envolventes en tus partidas. Sus orejeras son sinónimo de comodidad, ya que pueden rotar en un ángulo de 90 grados y reposar de forma suave en tu cuello. Y como si esto fuera poco, en estas vas a controlar los efectos de luz LED, silenciar o encender el micrófono con cancelación de ruido y regular el volumen.'},
    { id: '8', name: 'Fifa 22 Standard Edition Electronic Arts Ps4 Físico', price: 
    8699, category: 'juegos', img:'http://http2.mlstatic.com/D_647853-MLA49647073347_042022-I.jpg', stock: 10, description:'FIFA es el videojuego de fútbol más vendido de la actualidad y con más de 25 años de desarrollo. Vas a poder jugar con tus equipos y futbolistas preferidos en diversos modos. ¡Preparate para convertirte en campeón de todas las copas y torneos!'},
    { id: '9', name: 'Red Dead Redemption 2 Standard Edition Rockstar Games Ps4 Físico', price: 7399, category: 'juegos', img:'http://http2.mlstatic.com/D_667696-MLA46792682054_072021-I.jpg', stock: 10, description:'Ambientado a fines del siglo XIX y comienzos del XX, Red Dead narra la historia del bandido John Marston, quien es chantajeado por agentes federales que además, tienen amenazada a su familia. Es una franquicia de videojuegos que combina sus modernos gráficos y una gran cantidad de desafíos para sus gamers. Su completa historia hace que sea considerado por la crítica especializada como uno de los mejores juegos dentro del género aventura en los últimos años.'},
    { id: '10', name: 'Grand Theft Auto V Standard Edition Rockstar Games Ps4 Físico', price: 
    6899, category: 'juegos', img:'http://http2.mlstatic.com/D_945381-MLA51163357763_082022-I.jpg', stock: 10, description:'Cuando un joven estafador callejero, un asaltante de bancos retirado y un psicópata aterrador se ven enredados con algunos de los hombres mas amenazantes y trastornados del bajo mundo criminal, el gobierno de los EE. UU. y la industria del entretenimiento, deben dar una serie de golpes para sobrevivir en una ciudad despiadada donde no se confía en nadie, mucho menos entre ellos.'}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}