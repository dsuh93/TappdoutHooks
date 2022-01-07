json.set! @user.id do 
  json.extract! @user, :id, *users_columns
end