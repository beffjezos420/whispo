import { Button } from "@renderer/components/ui/button"
import { Control, ControlGroup } from "@renderer/components/ui/control"
import { tipcClient } from "@renderer/lib/tipc-client"
import { useMutation } from "@tanstack/react-query"

export function Component() {
  const deleteRecordingHistoryMutation = useMutation({
    mutationFn: tipcClient.deleteRecordingHistory,
    onSuccess() {},
  })

  return (
    <div className="grid gap-4">
      <ControlGroup>
        <Control label="Data Folder" className="px-3">
          <Button
            variant="outline"
            className="h-7 gap-1 px-2 py-0"
            onClick={() => {
              tipcClient.openDataFolder()
            }}
          >
            <span className="i-mingcute-folder-open-line"></span>
            <span>Open</span>
          </Button>
        </Control>
      </ControlGroup>

      <ControlGroup>
        <Control label="History Recordings" className="px-3">
          <Button
            variant="ghost"
            className="h-7 gap-1 px-2 py-0 text-red-500 hover:text-red-500"
            onClick={() => {
              if (
                window.confirm(
                  "Are you absolutely sure to remove all recordings forever?",
                )
              ) {
                deleteRecordingHistoryMutation.mutate()
              }
            }}
          >
            <span className="i-mingcute-delete-2-fill"></span>
            <span>Delete All</span>
          </Button>
        </Control>
      </ControlGroup>
    </div>
  )
}
