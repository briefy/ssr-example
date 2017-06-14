const styles = {
  main: {
    display: 'flex',
    height: '100vh',
    flexFlow: 'column nowrap',
  },
  header: {
    height: 50,
    backgroundColor: 'red',
  },
  body: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: 'yellow',
  },
  aside: {
    flex: '0 0 25%',
    backgroundColor: 'cadetblue',
  },
  board: {
    flex: '0 0 75%',
  },
  footer: {
    height: 100,
    backgroundColor: 'blue',
  },
}

export default styles;