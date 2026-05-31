import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#6200EE',
  secondary: '#03DAC6',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#333333',
  textLight: '#777777',
  danger: '#B00020',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 4,
  },
  headerTitle: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTotal: {
    color: colors.surface,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    color: colors.surface,
    fontSize: 30,
    lineHeight: 32,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: colors.textLight,
    fontSize: 16,
  },
  card: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cardLeft: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  cardCategory: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
  cardDate: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.danger,
  },
  input: {
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: 'bold',
  },
});