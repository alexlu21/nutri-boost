import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Search from '../common/Search';
import { Link } from 'react-router-dom';
import { FaEdit , FaTrashAlt } from 'react-icons/fa';

const ProductsView = () => {
    const [products, setProducts] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const result = await axios.get(
			"http://localhost:8088/producto",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setProducts(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8088/producto/delete/${id}`
		);
		loadProducts();
	};

	return (
		<section style={{ overflowX: 'hidden' }}> 
			<div className="container">
				<div className="row">
				<div className="col-md-12">
					<Search
					search={search}
					setSearch={setSearch}
					/>
				</div>
				</div>
				<div className="row">
				{products
					.filter((p) =>
					p.nombre
						.toLowerCase()
						.includes(search)
					)
					.map((product) => (
					<div className="col-md-3 mb-4" key={product.id}>
						<div className="card bg-secondary" style={{ height: '100%' }}>
						<div className="card-body d-flex flex-column">
							<div style={{ width: 150, height: 150, overflow: 'hidden', margin: '0 auto 10px' }}>
							<img
								src={product.productImg}
								alt="avatar"
								className="border border-dark img-fluid"
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
							/>
							</div>
							<h5 className="card-title">{product.nombre}</h5>
							<p className="card-text">Precio: {product.precio}€</p>
							<p className="card-text" style={{ flex: '1 0 auto' }}>{product.descripcion}</p>
							<div className="d-flex justify-content-between">
							<Link
								to={`/edit-product/${product.id}`}
								className="btn btn-warning">
								<FaEdit /> Editar
							</Link>
							<button
								className="btn btn-danger"
								onClick={() =>
								handleDelete(product.id)
								}>
								<FaTrashAlt /> Eliminar
							</button>
							</div>
						</div>
						</div>
					</div>
					))}
				</div>
			</div>
		</section>
)};

export default ProductsView;
