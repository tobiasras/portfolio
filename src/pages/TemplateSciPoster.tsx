import {Container} from "@/components/layout/container.tsx";
import {H1} from "@/components/ui/heading.tsx";
import {Lead} from "@/components/ui/lead.tsx";


export function TemplateSciPoster() {
    return (
        <>
            <main className="min-h-svh overflow-x-hidden bg-white mt-[var(--header-height)]">

                <Container className="pt-4 pb-2">
                    <H1>
                        Title of the project
                    </H1>
                </Container>


                <Container className="grid grid-cols-2">
                    <div>
                        
                        <Lead className="mt-2">
                            Developed a zero-shot anomaly detection pipeline using the DINOv3 vision foundation model on the MVTec Anomaly Detection dataset.
                        </Lead>
                        <Lead className="mt-2">
                            The system extracts patch-level image embeddings from defect-free reference images and detects anomalies by comparing test samples using different distance metrics.
                        </Lead>
                        <Lead className="mt-2">
                            Improved anomaly detection performance by applying a Mahalanobis distance approach, achieving strong results without supervised training or defect samples.
                        </Lead>
                    </div>
                    <div>

                    </div>
                </Container>
            </main>

        </>
    );
}