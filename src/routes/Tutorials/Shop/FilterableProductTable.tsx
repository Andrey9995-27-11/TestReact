import { SearchBar } from './SearchBar'
import { ProductTable } from './ProductTable'
import { Component } from 'react'

import './styles.sass'

interface FilterProps {
  searchString: string
  inStock: boolean
}

export type ResponseData = Array<{
  category: string
  name: string
  price?: string
  stocked?: boolean
}>

interface FilterProps2 extends FilterProps {
  data: ResponseData
}

export class FilterableProductTable extends Component<any, FilterProps2> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      searchString: '',
      inStock: false,
    }
    this.onChangeText = this.onChangeText.bind(this)
    this.onChangeCheck = this.onChangeCheck.bind(this)
    this.Fetch = this.Fetch.bind(this)
  }
  get getFilter() {
    const { searchString, inStock } = this.state
    return {
      searchString,
      inStock,
    }
  }
  onChangeText(value: string) {
    this.setState({
      searchString: value,
    })
  }
  onChangeCheck(value: boolean) {
    this.setState({
      inStock: value,
    })
  }

  Fetch = async (
    searchFilter = { ...this.getFilter },
    url = '/data/shop.json',
  ) => {
    const res = await fetch(url)
    if (res.ok) {
      try {
        const resdata = await res.json()
        this.onResponse(resdata, searchFilter)
      } catch (err) {
        console.log(err)
      }
    }
  }

  onResponse(
    data: ResponseData = [],
    { searchString, inStock }: FilterProps = { ...this.getFilter },
  ) {
    let formatData = data.slice()
    if (searchString) {
      const pattern = new RegExp(`${searchString}`, 'i')
      formatData = formatData.filter(
        (element) => element.name.match(pattern)?.length,
      )
    }
    if (inStock) {
      formatData = formatData.filter((element) => element.stocked)
    }
    this.setState({
      data: formatData,
    })
  }

  componentDidMount() {
    this.Fetch()
  }

  render() {
    return (
      <div className="filterable-product-table">
        <SearchBar
          {...this.getFilter}
          onChangeText={this.onChangeText}
          onChangeCheck={this.onChangeCheck}
          onSubmit={this.Fetch}
        />
        {this.state.data && <ProductTable data={this.state.data} />}
      </div>
    )
  }
}
