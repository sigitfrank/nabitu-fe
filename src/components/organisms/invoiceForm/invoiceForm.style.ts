import { AsSxObject } from 'src/lib/types/asSxObject.type';

export const invoiceFormSx = AsSxObject({
  title: {
    fontWeight: 'bold',
    marginBottom: '24px',
  },
  card: {
    borderColor: '#E2E8F0',
  },
  cardContent: {
    padding: 0,
  },
  subtitle: {
    borderBottom: '1px solid #E2E8F0',
    padding: '24px',
  },
  form: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  formLabel: {
    fontSize: '14px',
  },
  textField: {
    width: '100%',
    '& fieldset': {
      borderColor: '#E2E8F0',
    },
  },
  textFieldError: {
    '& fieldset': {
      borderColor: `F23030`,
    },
  },
  inputAdornment: {
    padding: 0,
    alignItems: 'stretch',
  },
  adornment: {
    background: '#F0F0F0',
    maxHeight: '100%',
    paddingX: '24px',
  },
  adornmentLabel: {
    fontSize: '12px',
  },
  alert: {
    marginTop: '24px',
    background: '#34D39920',
    color: '#637381',
    borderLeft: '8px solid #34D399',
  },
  alertIcon: {
    color: '#34D399',
    fontSize: '28px',
  },
  alertTitle: {
    color: '#004434',
    fontWeight: 'bold',
  },
});
