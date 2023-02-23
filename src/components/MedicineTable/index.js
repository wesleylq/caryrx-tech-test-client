import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_MEDICINES, GET_COMPANIES, GET_TYPES } from '../../queries';
import Select from '../Select';
import { Grid } from '@mui/material';


export default function MedicineTable() {

  const [properties, setProperties] = React.useState([])
  const [medicines, setMedicines] = React.useState([])
  const [companyId, setCopanyId] = React.useState()
  const [type, setType] = React.useState()


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [pageTotal, setPageTotal] = React.useState(0)

  const { data: companiesData, loading: companiesLoading } = useQuery(GET_COMPANIES)
  const { data: typesData, loading: typesLoading } = useQuery(GET_TYPES)
  const { data: medicinesData, refetch } = useQuery(GET_MEDICINES, {
    variables: {
      companyId,
      type,
      from: (page) * rowsPerPage,
      size: rowsPerPage
    },
  });

  React.useEffect(() => {
    if (medicinesData) {
      setMedicines(medicinesData.getMedicines.medicines)
      setPageTotal(medicinesData.getMedicines.count)
      const tablesHeads = medicinesData.getMedicines.medicines[0]

      if (tablesHeads)
        setProperties(Object.keys(tablesHeads))
    }

    refetch()
  }, [medicinesData, rowsPerPage, page, type])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatHeadLabel = (prop) => {
    if (prop === 'maxPrice') return 'Max Price (R$)'
    return prop[0].toUpperCase() + prop.slice(1);
  }


  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, alignSelf: "center" }}
        >
          Table of Medicines
        </Typography>
        {!companiesLoading && <Select data={companiesData.getCompanies} setState={setCopanyId} />}
        {!typesLoading && <Select data={typesData.getTypes} setState={setType} />}
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            {properties.length && properties.map((prop) => (
              <TableCell>{formatHeadLabel(prop)}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {medicines.length && medicines.map((row) => (
            <TableRow key={row.id}>
              {properties.length && properties.map((prop) => (
                <TableCell>{row[prop]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          count={pageTotal}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>
    </React.Fragment>
  );
}