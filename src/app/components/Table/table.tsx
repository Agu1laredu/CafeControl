'use client'
import React, { useState, useEffect } from 'react';
import { client } from "../../../supabase/client";

interface Comment {
    id: string;
    content: string;
    name: string
    // Agrega otras propiedades según la estructura de tu tabla comments
}

const CommentsList: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const { data, error } = await client
                    .from('coments')
                    .select('*'); // Obtener todas las columnas de la tabla comments

                if (error) {
                    throw error;
                }

                if (data) {
                    setComments(data);
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);

    return (
        <div>
            <b className='mb-4'>RESEÑAS</b>
            <ul>
                {comments.map(comment => (
                    <section key={comment.name} className="border border-green-500 rounded p-4 mb-4">
                        <div className="flex items-center mb-2">
                            <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div> {/* Viñeta */}
                            <h3 className="text-xl font-semibold">{comment.name}</h3>
                        </div>
                        <p className="text-gray-800">{comment.content}</p>
                    </section>

                ))}
            </ul>
        </div>
    );
};

export default CommentsList;
