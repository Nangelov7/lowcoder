import { QRCodeComp } from "comps/comps/qrCodeComp";
import Example from "../../common/Example";
import ExampleGroup from "../../common/ExampleGroup";

export default function QRCodeExample() {
    return (
      <>
        <ExampleGroup
          title="Basic Usage"
          description="The Following Examples Show the Basic Usage of the QR Code Component."
        >
          <Example
            title="QR Code Component"
            config={{ 
            }}
            compFactory={QRCodeComp}
          />
          <Example
            title="Hiding QR Code Component"
            config={{ 
              hidden: true,
            }}
            compFactory={QRCodeComp}
          />
          <Example
            title="Display Logo at the center of QR Code Component"
            config={{ 
              value: "https://www.google.com",
              image:"data:image/webp;base64,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"
            }}
            compFactory={QRCodeComp}
          />
        </ExampleGroup>

        <ExampleGroup
          title="Styling Properties"
          description="The Following Examples Show the different Styling of the QR Code Component."
        >
          <Example
            title="Background Color, Margin & Padding"
            config={{
              style: {
                "background": "linear-gradient(135deg, #72afd3 0%, #96e6a1 100%)",
                "color": "#DC1212",
                "margin": "15px",
                "padding": "25px",
              },
            }}
            compFactory={QRCodeComp}
          />
          <Example
            title="Border Style, Color, Width & Radius"
            config={{ 
              style: {
                "border": "#DC1212",
                "margin": "15px",
                "padding": "25px",
                "radius": "10px",
                "borderWidth": "3px",
              },
            }}
            compFactory={QRCodeComp}
          />
        </ExampleGroup>

        <ExampleGroup
          title="Animation Styles"
          description="The Following Examples Show the different Animation Styles of the QR Code Component."
        >
          <Example
            title="Bounce Animation"
            config={{
              style: {
                "margin": "15px",
                "padding": "25px",
              },
              animationStyle: {
                "animation": "bounce",
                "animationDelay": "1s",
                "animationDuration": "3s",
                "animationIterationCount": "infinite"
              },
            }}
            compFactory={QRCodeComp}
          />
          <Example
            title="Swing Animation"
            config={{
              style: {
                "margin": "15px",
                "padding": "25px",
              },
              animationStyle: {
                "animation": "swing",
                "animationDelay": "1s",
                "animationDuration": "3s",
                "animationIterationCount": "infinite"
              },
            }}
            compFactory={QRCodeComp}
          />
          <Example
            title="Tada Animation"
            config={{
              style: {
                "margin": "15px",
                "padding": "25px",
              },
              animationStyle: {
                "animation": "tada",
                "animationDelay": "1s",
                "animationDuration": "3s",
                "animationIterationCount": "infinite"
              },
            }}
            compFactory={QRCodeComp}
          />
        </ExampleGroup>
      </>
    );
  }