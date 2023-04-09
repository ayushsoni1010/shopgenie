<script>
  import { useEffect } from "../alanai_hook";
  import alanBtn from "@alan-ai/alan-sdk-web";

  useEffect(() => {
    alanBtn({
      key: "224341b569f9a39f1d0a13a158e29c4b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
</script>
