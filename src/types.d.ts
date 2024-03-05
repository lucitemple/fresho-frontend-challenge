export type Product = {
	product_name: string
	product_code: string
	cost_price: number
	sell_price: SellPrice
}

export type SellPrice = {
	method: string
	value: number
	margin: number
}
