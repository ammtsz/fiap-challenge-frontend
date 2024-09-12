export const formatDateAndTime = (date: string | Date) => {
  const d = new Date(date)

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return formatter.format(d);
};

export const formatDate = (date: string | Date) => {
  const d = new Date(date)

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formatter.format(d);
};


export const formatTime = (date: string | Date) => {
  const d = new Date(date)

  const formatter = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return formatter.format(d);
};
