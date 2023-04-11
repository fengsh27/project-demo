const { AzureMonitorTraceExporter } = require("@azure/monitor-opentelemetry-exporter");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { context, trace } = require("@opentelemetry/api")

const provider = new NodeTracerProvider();
provider.register();

let is_in_azure = false;
export const isInAzure = () => (is_in_azure);
try {
    // Create an exporter instance.
    const connStr = process.env.APPLICATIONINSIGHTS_CONNECTION_STRING??"<Your Connection String>";
    const exporter = new AzureMonitorTraceExporter({
      connectionString: connStr
    });
    
    // Add the exporter to the provider.
    provider.addSpanProcessor(
      new BatchSpanProcessor(exporter)
    );
    is_in_azure = true;
} catch (err: any) {
    console.log(err.message);
}

// Create a tracer.
const tracer = trace.getTracer("example-basic-tracer-node");

// Create a span. A span must be closed.
const parentSpan = tracer.startSpan("main");

for (let i = 0; i < 10; i += 1) {
   doWork(parentSpan);
}
// Be sure to end the span.
parentSpan.end();

function doWork(parent: any) {
  // Start another span. In this example, the main method already started a
  // span, so that will be the parent span, and this will be a child span.
  const ctx = trace.setSpan(context.active(), parent);

  // Set attributes to the span.
  // Check the SpanOptions interface for more options that can be set into the span creation
  const spanOptions = {
      attributes: {
        "key": "value"
      }
  };

  const span = tracer.startSpan("doWork", spanOptions, ctx);

  // Simulate some random work.
  for (let i = 0; i <= Math.floor(Math.random() * 40000000); i += 1) {
    // empty
  }

  // Annotate our span to capture metadata about our operation.
  span.addEvent("invoking doWork");

  // Mark the end of span execution.
  span.end();
}
