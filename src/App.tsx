import Grid from "@pigment-css/react/Grid";

export default function App() {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>Normal</Grid>
      <Grid size="grow">Grow</Grid>
    </Grid>
  );
}
