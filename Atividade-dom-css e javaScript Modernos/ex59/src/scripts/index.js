function procuraSobremesa(sobremesas, valorDoInput) {
    /* Desenvolva sua lógica a partir aqui */
  const resultados1 = sobremesas.filter((elemento) => elemento.nome.toLowerCase().includes(valorDoInput.toLowerCase()))

    return resultados1; /* É necessário retornar uma lista de produtos */
  }