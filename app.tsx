import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="text-center mb-16">
        <Image src="/banner.png" alt="Banner" width={1200} height={400} className="mx-auto rounded-xl mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Daniel Camilo</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Senior Software Engineer • ERP Automations • Full-Stack Developer
        </p>
        <p className="mt-2 text-sm text-gray-500">
          São Paulo, Brazil • danicvan@hotmail.com
        </p>
        <div className="mt-6 space-x-4">
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/daniel-camilo-evangelista" target="_blank">LinkedIn</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/danicvan" target="_blank">GitHub</a>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-center">
          I'm a senior developer with 6+ years of experience building custom ERP solutions, automating workflows, and creating full-stack systems that simplify complex operations. 
          I’ve integrated systems like SAP, Protheus and Fluig using REST, SOAP and AdvPL, always aligning technology with business results.
        </p>
        <div className="flex justify-center mt-8">
          <Image src="/coding-night.gif" alt="Coding at night" width={600} height={350} className="rounded-xl" />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Auto Care Landing</h2>
            <p className="text-gray-400">
              Landing page responsiva para agendamento de serviços automotivos.
            </p>
            <a
              href="https://github.com/danicvan/auto-care-landing"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              target="_blank"
            >
              Ver repositório →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">AI Travel Planner</h2>
            <p className="text-gray-400">
              Planejador de viagens inteligente com sugestões e estimativas em tempo real.
            </p>
            <a
              href="https://github.com/danicvan/ai-travel-planner"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              target="_blank"
            >
              Ver repositório →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Reverse Proxy Balancer</h2>
            <p className="text-gray-400">
              Balanceamento de carga com proxy reverso utilizando Node e Caddy.
            </p>
            <a
              href="https://github.com/danicvan/proxy-reverse-load-balancer"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              target="_blank"
            >
              Ver repositório →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Statistic Map Dashboard</h2>
            <p className="text-gray-400">
              Dashboard com mapa interativo para análise estatística global.
            </p>
            <a
              href="https://github.com/danicvan/statistic-map-dashboard"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              target="_blank"
            >
              Ver repositório →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Fluig API Template</h2>
            <p className="text-gray-400">
              Template para integração com Fluig (TOTVS) com autenticação segura e modular.
            </p>
            <a
              href="https://github.com/danicvan/fluig-api-template"
              className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              target="_blank"
            >
              Ver repositório →
            </a>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
