import { gql } from '@apollo/client'

const GET_EXPENSIVE_MEDICINES = gql`
  query getExpensiveMedicinesQuery {
    getExpensiveMedicines {
			id
			label
			value
		}
  } 
`

const GET_AVG_PRICE_BY_TYPE = gql`
  query averagePriceByTypeQuery {
    averagePriceByType {
			type
			avg
		}
  } 
`

const GET_COUNT_MEDICINES_BY_TYPE = gql`
  query countMedicinesByTypeQuery {
    countMedicinesByType {
			type
			count
		}
  } 
`

const GET_COMPANIES = gql`
  query getCompaniesQuery {
    getCompanies {
			id
			name
		}
  } 
`
const GET_TYPES = gql`
  query getTypesQuery {
    getTypes{
			type
		}
  } 
`

const GET_MEDICINES = gql`
query medicinesQuery($companyId: String, $type: String , $from: Int! ,$size: Int!) {
  getMedicines(companyId: $companyId, type: $type ,from: $from, size: $size) {
    count
    medicines {
      name
      substance
      presentation
      type
      maxPrice
    }    
  }
}
`

export {
  GET_EXPENSIVE_MEDICINES,
  GET_COUNT_MEDICINES_BY_TYPE,
  GET_AVG_PRICE_BY_TYPE,
  GET_COMPANIES,
  GET_MEDICINES,
  GET_TYPES
}