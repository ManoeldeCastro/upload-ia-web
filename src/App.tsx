import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand2 } from "lucide-react"
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-accent-foreground text-sm">Desenvolvido com ❤️ no NLW da RocketSeat</span>

          <Separator orientation="vertical" className="h6 text-accent-foreground"/>

          <Button variant='default'>
            <Github className="w-4 h-4 mr-2"/>
            GitHub
          </Button>
        </div>

      </div>
      <main className="flex-1 p-6 flex gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                className="resize-none p-4 leading-relaxed" 
                placeholder="Inclua o promp para IA"
              />
              <Textarea
                className="resize-none p-4 leading-relaxed" 
                placeholder="Resultado gerado pela IA"
                readOnly
              />
            </div>
            <p>Lembre-se: você pode utilizar a variável <code className="text-violet-400">{"{transcription}"}</code>o seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.</p>
          </div>
          <aside className="w-80 space-y-6">
              <form className="space-y-6">

                <label 
                  htmlFor="video" 
                  className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm items-center flex-col gap-2 justify-center text-accent-foreground hover:bg-primary/20">
                  <FileVideo className="w-4 h-4"/>
                  Selecione um vídeo
                </label>
                <input type="file" id="video" accept="video/mp4" className="sr-only"/>
                <Separator />
                <div className="space-y-2">
                  <label>Promp</label>
                  <Select defaultValue="Title">
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um promp..."/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Title">Titulo do YouTube</SelectItem>
                      <SelectItem value="description">Descrição do YouTube</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator/>
                <div className="space-y-2">
                  <Label HtmlFor="promp">Promp de transcrição</Label>
                  <Textarea id="promp" className="h-20 leading-relaxed resize-none" placeholder="Inclua palavras chaves do video separada por virgula" />
                </div>
                <Button type="submit" className="w-full">Carregar video <Upload className="w-4 h-4 ml-2"/></Button>
              </form>
              <Separator/>
              <form className="space-y-6">

                <div className="space-y-2">
                  <label>Modelo</label>
                  <Select disabled defaultValue="gpt3.5">
                    <SelectTrigger>
                      <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt3.5">GP3 3.5-turbo 16k</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="block text-xs text-accent-foreground ">Você poderá customizar essa opção em breve</span>
                </div>
                <Separator/>
                <div className="space-y-4">
                  <label>Temperatura</label>
                  <Slider
                    min={0}
                    max={1}
                    step={0.1}
                  />
                  <span className="block text-xs text-accent-foreground leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
                </div>
                <Separator/>
                <Button type="submit" className="w-full">
                  Executar
                  <Wand2 className="w-4 h-4 ml-2"/>
                </Button>
              </form>
          </aside>
        </main>
    </div>
  );
}

