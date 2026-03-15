from pydantic import BaseModel
from typing import List


class NodePayload(BaseModel):
    id: str


class EdgePayload(BaseModel):
    source: str
    target: str


class PipelinePayload(BaseModel):
    nodes: List[NodePayload]
    edges: List[EdgePayload]


class ParseResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool
