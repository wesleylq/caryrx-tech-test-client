
export const styles = {
  box: {
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  grid: {
    width: 600, 
    height: 400, 
    borderColor: "grey",
    padding: 5 
  }
}