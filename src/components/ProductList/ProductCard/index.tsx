import styles from "./style.module.scss"
import { Product } from "../../../interfaces/products.interface"

interface ProductCardProps {
    product: Product;
    addCart: (addingcart: Product) => void
}

export const ProductCard = ({ product, addCart }: ProductCardProps,) => {

    return (
        <li className={styles.card}>
            <div className={styles.divImg}>
                <img src={product.photo} alt={product.name} />
            </div>
            <div>
                <div>
                    <div className={styles.subTitle}>
                        <h3>{product.name}</h3>
                        <span className={styles.price}>{Number(product.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    </div>
                    <span className={styles.category}>{product.description}</span>
                </div>
                <div className={styles.divButton}>
                    <button onClick={() => addCart(product)}>Comprar</button>
                </div>
            </div>
        </li>
    )
}