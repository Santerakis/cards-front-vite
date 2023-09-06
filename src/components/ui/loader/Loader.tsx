import { CircularProgress } from '@mui/material'

export const Loader = () => (
  <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
    <CircularProgress />
  </div>
)
