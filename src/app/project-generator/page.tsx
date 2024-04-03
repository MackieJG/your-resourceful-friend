import { Button } from "@/components/ui/button"
import { Dices } from "lucide-react"

const ProjectGenerator = () => {
  return (
    <div className="flex flex-1 items-center justify-center text-center flex-col gap-11">
      <Button><Dices className="mr-2 h-4 w-4" /> Generate</Button>
      <h1 className="text-4xl md:text-7xl font-bold">
        Build a <span className= "text-primary">Discord Bot</span> for a <span className="text-primary">Valheim Server</span>
      </h1>
      </div>
  )
}

export default ProjectGenerator