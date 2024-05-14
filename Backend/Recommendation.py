import networkx as nx
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from gensim.models import Word2Vec
import pickle

# Load the knowledge graph
knowledge_graph = nx.read_graphml("knowledge_graph.graphml")

# Load or train the graph embedding model
model_load_path = "graph_embeddings.pkl"
with open(model_load_path, 'rb') as f:
    graph_embedding_model = pickle.load(f)

# Create a random user profile vector
user_profile = np.random.rand(100)

def generate_recommendations(entity, user_profile, num_recommendations=5, alpha=0.5):
    if entity not in knowledge_graph:
        print("Entity not found in the knowledge graph")
        return []

    # Get the embeddings for the entity and its neighbors
    entity_embedding = graph_embedding_model.wv[entity]
    neighbor_embeddings = [graph_embedding_model.wv[neighbor] for neighbor in knowledge_graph.neighbors(entity)]

    # Compute similarity scores with the user profile
    entity_score = cosine_similarity(user_profile.reshape(1, -1), entity_embedding.reshape(1, -1))
    neighbor_scores = cosine_similarity(user_profile.reshape(1, -1), np.array(neighbor_embeddings))

    # Combine entity score and neighbor scores
    combined_scores = alpha * entity_score + (1 - alpha) * neighbor_scores

    # Get the top recommendations
    top_idxs = np.argsort(-combined_scores, axis=1)[0][:num_recommendations]
    #recommendations = [list(knowledge_graph.neighbors(entity))[idx] for idx in top_idxs]
    recommendations = [neighbor for idx, neighbor in enumerate(knowledge_graph.neighbors(entity)) if idx in top_idxs and is_educational_source(neighbor)]

    return recommendations

def is_educational_source(entity):
    # Get the node attributes for the entity
    node_attributes = knowledge_graph.nodes[entity]

    if entity.startswith("maths_"):
        return True

    # Check if the entity has a "type" attribute and if it's "educational_resource"
    if "type" in node_attributes and node_attributes["type"] == "educational_resource":
        return True

    # Check if the entity has a "category" attribute and if it's one of the educational categories
    educational_categories = ["books", "videos", "courses", "quizzes"]
    if "category" in node_attributes and node_attributes["category"] in educational_categories:
        return True

    return False

# Example usage:
entity = "English"
recommendations = generate_recommendations(entity, user_profile)
print("Recommendations for", entity, ":", recommendations)

# Add new node to the kg
def add_entity_relationship(entity1, entity2, relationship):
    # Add nodes if they don't exist already
    if entity1 in knowledge_graph.nodes:
        print(f"{entity1} is in the graph.")
    else:
        knowledge_graph.add_node(entity1)
        knowledge_graph.add_node(entity2)

        # Add edge between the entities with the given relationship
        knowledge_graph.add_edge(entity1, entity2, relationship)



