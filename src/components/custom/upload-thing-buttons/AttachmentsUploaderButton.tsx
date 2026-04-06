import { UploadButton } from "@/lib/uploadThingUtils";

type Props = { label?: string; preview?: boolean };

export default function AttachmentsUploaderButton({ label, preview }: Props) {
  if (preview) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="bg-primary/80 text-primary-foreground cursor-not-allowed rounded-md px-4 py-2 text-sm font-semibold opacity-60">
          Choose File(s)
        </div>
        <p className="text-muted-foreground text-xs">
          Attachments upload (preview)
        </p>
      </div>
    );
  }

  return (
    <UploadButton
      endpoint="attachmentsUploader"
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        console.log("------------CAUSE--------------", error.cause);
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
