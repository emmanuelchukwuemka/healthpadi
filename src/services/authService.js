import { supabase } from './supabaseClient'

// Sign up with email and password
export const signUp = async (email, password, firstName, lastName) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    // If sign up is successful, update the user's profile
    if (data.user) {
      await updateProfile(data.user.id, { 
        first_name: firstName, 
        last_name: lastName,
        full_name: `${firstName} ${lastName}`
      })
    }

    return { data, error: null }
  } catch (error) {
    console.error('Sign up error:', error)
    return { data: null, error }
  }
}

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Sign in error:', error)
    return { data: null, error }
  }
}

// Sign out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('Sign out error:', error)
    return { error }
  }
}

// Get current user
export const getCurrentUser = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

// Update user profile
export const updateProfile = async (userId, profileData) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: userId, ...profileData }, { onConflict: 'id' })
      
    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error updating profile:', error)
    return { data: null, error }
  }
}

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error getting user profile:', error)
    return { data: null, error }
  }
}