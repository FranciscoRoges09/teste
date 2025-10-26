# PIX Payment System

Sistema de pagamento PIX automático integrado com a API BuckPay, desenvolvido com Next.js 15 e React 19.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta na [BuckPay](https://buckpay.com.br/) com API key
- npm, yarn ou pnpm

## 🚀 Instalação

1. Clone o repositório:
\`\`\`bash
git clone <seu-repositorio>
cd pixpayment6
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto (copie do `.env.example`):
\`\`\`bash
cp .env.example .env
\`\`\`

Edite o arquivo `.env` e adicione sua chave da API BuckPay:
\`\`\`env
BUCKPAY_API_KEY=sua_chave_api_aqui
\`\`\`

**⚠️ IMPORTANTE:** Nunca commite o arquivo `.env` no Git. Ele já está no `.gitignore`.

## 🏃 Executando o projeto

### Modo de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção:
\`\`\`bash
npm run build
npm start
# ou
yarn build
yarn start
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
pixpayment6/
├── app/
│   ├── api/
│   │   ├── create-pix/      # Endpoint para criar pagamento PIX
│   │   └── check-payment/   # Endpoint para verificar status do pagamento
│   ├── page.tsx             # Página principal com QR Code
│   ├── plano1/              # Página de exemplo - Plano 1
│   ├── plano2/              # Página de exemplo - Plano 2
│   ├── layout.tsx           # Layout principal
│   └── globals.css          # Estilos globais
├── components/
│   └── ui/                  # Componentes shadcn/ui
├── lib/
│   └── utils.ts             # Utilitários
├── public/                  # Arquivos estáticos
├── .env.example             # Exemplo de variáveis de ambiente
└── package.json
\`\`\`

## 🔑 Obtendo a API Key

1. Acesse [BuckPay](https://buckpay.com.br/)
2. Crie uma conta ou faça login
3. Navegue até a seção de API/Integrações
4. Copie sua API key
5. Cole no arquivo `.env`

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Adicione a variável de ambiente `BUCKPAY_API_KEY` nas configurações do projeto
4. Deploy automático!

### Outras plataformas

Certifique-se de configurar a variável de ambiente `BUCKPAY_API_KEY` na plataforma de deploy escolhida.

## 🔒 Segurança

- ✅ API key armazenada em variável de ambiente
- ✅ `.env` incluído no `.gitignore`
- ✅ Validação de API key nos endpoints
- ✅ Uso de `process.env` no servidor

**Nunca exponha sua API key no código ou no Git!**

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/) - Framework React
- [React 19](https://react.dev/) - Biblioteca UI
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS v4](https://tailwindcss.com/) - Estilização
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [BuckPay API](https://buckpay.com.br/) - Processamento de pagamentos PIX

## 📝 Funcionalidades

- ✅ Geração automática de QR Code PIX
- ✅ Código PIX copiável
- ✅ Verificação automática de pagamento (polling a cada 5s)
- ✅ Interface responsiva
- ✅ Estados de loading, erro e sucesso
- ✅ Integração completa com BuckPay API

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

## 💬 Suporte

Para dúvidas sobre a API BuckPay, consulte a [documentação oficial](https://buckpay.com.br/docs).
\`\`\`

```typescriptreact file="index.html" isDeleted="true"
...deleted...
