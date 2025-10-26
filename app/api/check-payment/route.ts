import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.BUCKPAY_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "BUCKPAY_API_KEY não configurada" }, { status: 500 })
    }

    const searchParams = request.nextUrl.searchParams
    const externalId = searchParams.get("external_id")

    if (!externalId) {
      return NextResponse.json({ error: "external_id é obrigatório" }, { status: 400 })
    }

    const response = await fetch(`https://api.realtechdev.com.br/v1/transactions/external_id/${externalId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "user-agent": "Buckpay API",
      },
    })

    const data = await response.json()

    if (!response.ok) {
      if (response.status === 403) {
        return NextResponse.json(
          {
            error: "Erro de autenticação com a API. Verifique se a chave BUCKPAY_API_KEY está correta.",
            details: data,
          },
          { status: 403 },
        )
      }
      return NextResponse.json(
        {
          error: "Erro ao verificar pagamento. Tente novamente.",
          details: data,
        },
        { status: response.status },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error checking payment:", error)
    return NextResponse.json({ error: "Erro ao processar requisição" }, { status: 500 })
  }
}
