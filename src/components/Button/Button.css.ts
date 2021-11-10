import { style } from '@vanilla-extract/css';

export const button = style({
      border:'none',
      color:'white',
      padding:'15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer'
})

export const primary = style({
    backgroundColor: '#008CBA',
})
export const secondary = style({
    backgroundColor: '#e7e7e7',
    color: 'black'
})
export const success = style({
    backgroundColor: '#4CAF50',
})
export const danger = style({
    backgroundColor: '#f44336',
})