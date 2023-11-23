import { Component } from 'react';

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage: false
        };
        this.stock = 10;
    }

    handleBuyClick = () => {
        this.setState({ showMessage: true });
        this.stock--;
    };

    render() {
        return (
            <>
                <main className="container text-center">
                    <h1 className="mt-3">TV Samsung</h1>
                    <p className="lead mt-3 text-start me-3">
                        El televisor <b>Samsung</b> es una opción perfecta para aquellos que buscan una experiencia de entretenimiento inigualable en la comodidad de su hogar. Con su impresionante calidad de imagen y sonido envolvente, este televisor te sumergirá en tus películas, programas y juegos favoritos.
                        <br /><br />
                        El televisor Samsung cuenta con una pantalla LED de alta resolución que ofrece colores vibrantes y detalles nítidos. <b>Su tamaño generoso y diseño delgado le dan un aspecto elegante que se adapta perfectamente a cualquier espacio.</b>
                        <br /><br />
                        Además, este televisor inteligente viene equipado con una variedad de características y tecnologías avanzadas. <b>Puedes acceder a tus aplicaciones de streaming favoritas, navegar por Internet y disfrutar de contenido en línea con facilidad.</b> También ofrece conectividad Wi-Fi y puertos HDMI para que puedas conectar otros dispositivos, como consolas de videojuegos o reproductores de Blu-ray.
                        <br /><br />
                        Con el televisor Samsung, podrás disfrutar de <b>una experiencia de visualización excepcional, sumergirte en el mundo del entretenimiento y crear momentos inolvidables con tus seres queridos.</b>
                    </p>
                    <p className="lead mt-3">Precio: <b className="fs-2">$100.000</b></p>
                    <p className="lead mt-3 text-start">SKU: <b>4225-776-3234</b></p>
                    <p className="lead text-start">Cantidad disponible: <b>{this.stock}</b></p>
                    {this.state.showMessage && (
                            <p className="alert alert-info fs-5">Gracias por su compra</p>
                        )}
                    <div className='d-flex justify-content-end'>
                        <button className="btn btn-info fs-5 mb-5" onClick={this.handleBuyClick}>
                            Comprar
                        </button>
                    </div>

                </main>
            </>
        );
    }
}

export default DetailProduct;
