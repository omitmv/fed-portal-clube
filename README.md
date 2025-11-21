# fed-portal-clube

## Arquitetura do Projeto

Este projeto utiliza React com Vite e está organizado para facilitar a escalabilidade e manutenção. Abaixo está um mapeamento das principais pastas e arquivos, com a função de cada um:


### Estrutura de Pastas

```text
src/
	assets/         # Imagens e arquivos estáticos usados no frontend
	core/           # Código central reutilizável, como contextos globais
		context/      # Contextos globais do React (ex: estado global)
	features/       # Funcionalidades principais do app, separadas por domínio
		About/        # Feature/página "Sobre"
			components/ # Componentes específicos da feature
			index.js    # Exporta o componente principal da feature
		App/          # Feature principal, ponto de entrada da aplicação
			components/ # Componentes da aplicação principal (ex: navegação)
			App.css     # Estilos específicos da aplicação
			index.js    # Exporta o componente principal da feature
		Home/         # Feature/página "Home"
			components/ # Componentes específicos da feature
			index.js    # Exporta o componente principal da feature
	index.css       # Estilos globais da aplicação
	main.jsx        # Ponto de entrada do React, renderiza o App
public/           # Arquivos públicos acessíveis diretamente (ex: favicon, imagens)
```

### Descrição das Pastas e Arquivos


- **src/assets/**: Contém imagens e outros recursos estáticos usados no frontend.
- **src/core/context/**: Contextos globais do React, como o `globalContext.jsx`, que provê estado global para toda a aplicação.
- **src/features/**: Cada subpasta representa uma funcionalidade/página do sistema, isolando componentes e lógica relacionados.
	- **App/**: Contém o componente principal da aplicação, responsável por definir rotas, navegação e o provedor de contexto global.
	- **Home/** e **About/**: Páginas/funcionalidades específicas, cada uma com seus próprios componentes.
- **src/index.css**: Estilos globais aplicados em toda a aplicação.
- **src/main.jsx**: Ponto de entrada da aplicação React, onde o App é renderizado e o roteamento é configurado.
- **public/**: Arquivos estáticos públicos, como imagens SVG usadas em ícones ou logos.

### Padrão de Organização

- **Componentização**: Cada feature tem sua própria pasta e componentes, facilitando a manutenção e evolução isolada.
- **Contexto Global**: O estado global é centralizado em `core/context/globalContext.jsx` e disponibilizado via Provider.
- **Roteamento**: Configurado no componente principal (`App`), utilizando `react-router-dom`.
- **Estilo**: Estilos globais em `index.css` e específicos em cada feature quando necessário.

### Como contribuir

1. Siga a estrutura de pastas e padrões já definidos.
2. Crie novas features dentro de `src/features/NomeDaFeature`.
3. Utilize o contexto global apenas para estados realmente compartilhados.
4. Prefira componentes funcionais e hooks.
5. Mantenha o código limpo e documentado.
