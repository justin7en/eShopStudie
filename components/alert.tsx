import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Button } from "./ui/button"

export default function Alert() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Kaufen</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Artikel erfolgreich gekauft!</AlertDialogTitle>
            <AlertDialogDescription>
              Wollen sie noch weitere Artikel kaufen?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>weiter Einkaufen</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}