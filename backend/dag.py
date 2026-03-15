from collections import defaultdict
from typing import List

from models import NodePayload, EdgePayload


def _build_adjacency(nodes: List[NodePayload], edges: List[EdgePayload]) -> dict[str, list[str]]:
    node_ids = {n.id for n in nodes}
    adj = defaultdict(list)
    for e in edges:
        if e.source in node_ids and e.target in node_ids:
            adj[e.source].append(e.target)
    return adj


def _has_cycle_from(v: str, adj: dict, visited: set, rec_stack: set) -> bool:
    visited.add(v)
    rec_stack.add(v)
    try:
        for w in adj.get(v, []):
            if w not in visited:
                if _has_cycle_from(w, adj, visited, rec_stack):
                    return True
            elif w in rec_stack:
                return True
        return False
    finally:
        rec_stack.discard(v)


def is_dag(nodes: List[NodePayload], edges: List[EdgePayload]) -> bool:
    """True if the graph has no directed cycles."""
    adj = _build_adjacency(nodes, edges)
    visited = set()
    rec_stack = set()
    for n in nodes:
        if n.id not in visited and _has_cycle_from(n.id, adj, visited, rec_stack):
            return False
    return True
