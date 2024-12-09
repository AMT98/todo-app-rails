     class SessionsController < ApplicationController
       def create
         user = User.find_by(email: params[:email])
         if user&.authenticate(params[:password])
           render json: { token: SecureRandom.hex, user_id: user.id }, status: :ok
         else
           render json: { error: "Invalid email or password" }, status: :unauthorized
         end
       end

       def destroy
         # Implement logout logic (if token-based, invalidate token)
         head :no_content
       end
     end