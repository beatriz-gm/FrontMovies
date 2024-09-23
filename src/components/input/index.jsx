import { Container } from "./styles";

export function Input({icon : Icon, ...rest}) {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}

// foi colocado dentro de um container por causa dos ícone
// quando se usa a sintax de um ComponentStyle, não pode ser com letra minúscula, mas para passar uma propriedade, é com letra minúscula, então
// o ícone foi passado como propriedade dentro das chaves e renomeado
// passamos o ...rest para o input, para pegar todo o restante de propriedades, o tipo, nome e tudo mais
// 
