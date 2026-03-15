from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import PipelinePayload, ParseResponse
from dag import is_dag

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Accept"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse", response_model=ParseResponse)
def parse_pipeline(payload: PipelinePayload):
    return ParseResponse(
        num_nodes=len(payload.nodes),
        num_edges=len(payload.edges),
        is_dag=is_dag(payload.nodes, payload.edges),
    )
